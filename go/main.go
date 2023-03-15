package main

import (
	"net/http"
	"os"
	"strconv"
	"strings"

	log "github.com/sirupsen/logrus"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

// global variables
var port string

func init() {

	// get the port
	port = os.Getenv("PORT")
	if len(port) == 0 {
		port = ":7778"
	}
}

func main() {
	router := gin.Default()

	// Allow access from anywhere
	router.Use(cors.Default())

	// root
	router.GET("/", func(c *gin.Context) {
		c.Data(http.StatusOK, "text/html; charset=utf-8", []byte("<h1>Hello, World!</h1>"))
	})

	// get all users
	router.GET("/users", func(c *gin.Context) {
		c.JSON(http.StatusOK, users)
	})

	// get user by id
	router.GET("/users/:target_user_id", func(c *gin.Context) {
		target_user_id := strings.ToLower(c.Param("target_user_id"))

		for _, u := range users {
			id, _ := strconv.Atoi(target_user_id)
			if u.Id == id {
				c.JSON(http.StatusOK, u)
				return
			}
		}

		c.JSON(http.StatusNotFound, gin.H{"error": "user not found"})
	})

	// add new user
	router.POST("/users", func(c *gin.Context) {
		next_id := users[len(users)-1].Id + 1

		var new_user User
		c.BindJSON(&new_user)
		new_user.Id = next_id

		users = append(users, new_user)

		c.JSON(http.StatusCreated, new_user)
	})

	// update user
	router.PUT("/users/:user_id", func(c *gin.Context) {})

	log.Info("Server listening on port ", port)

	log.Fatal(http.ListenAndServe(port, router))
}
