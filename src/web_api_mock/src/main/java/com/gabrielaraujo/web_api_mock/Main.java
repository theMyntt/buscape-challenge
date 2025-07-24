package com.gabrielaraujo.web_api_mock;

import org.glassfish.jersey.jetty.JettyHttpContainerFactory;
import org.glassfish.jersey.server.ResourceConfig;

import java.net.URI;

public class Main {
    public static void main(String[] args) {
        URI baseURI = URI.create("http://localhost:8080");
        ResourceConfig config = new ResourceConfig()
                .packages("com.gabrielaraujo.web_api_mock");

        JettyHttpContainerFactory.createServer(baseURI, config);
        System.out.println("Server started in [::1]:8080");
    }
}