package com.example.clase5SEMI1.Config;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ChatClientConfig {
    @Bean
    public ChatClient chatClientBean(ChatClient.Builder chatClientBuilder) {
        return chatClientBuilder.build();
    }
}
