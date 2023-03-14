package main

type User struct {
	Id    int    `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
}

var users = []User{
	{Id: 1, Name: "John Doe", Email: "john_doe@coolcompany.com"},
	{Id: 2, Name: "Sally Smith", Email: "sallysmith@coolcompany.com"},
}
