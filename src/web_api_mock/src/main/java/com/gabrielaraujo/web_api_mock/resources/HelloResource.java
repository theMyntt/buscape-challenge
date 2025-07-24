package com.gabrielaraujo.web_api_mock.resources;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/hello")
public class HelloResource {
    @GET
    @Produces(MediaType.APPLICATION_XML)
    public String doGet() {
        return "<string>hello world!</string>";
    }
}
