FROM golang:1.18 as build
WORKDIR /app
COPY ./ ./

ENV GO111MODULE=on 
ENV CGO_ENABLED=0
ENV GOOS=linux 
ENV GOARCH=amd64 

RUN go build -ldflags="-w -s" -o go-demo .

FROM scratch
WORKDIR /app
COPY --from=build /app/go-demo ./go-demo

CMD ["./go-demo"]
EXPOSE 7778
