package com.example.clase5SEMI1.Controller;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.client.advisor.PromptChatMemoryAdvisor;
import org.springframework.ai.chat.memory.ChatMemory;
import org.springframework.ai.chat.memory.ChatMemoryRepository;
import org.springframework.ai.chat.memory.InMemoryChatMemoryRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;


@Controller
@ResponseBody
public class OpinionesController {
    private final ChatClient chatClient;
    private final InMemoryChatMemoryRepository memoryRepository = new InMemoryChatMemoryRepository();
    private final Map<String, PromptChatMemoryAdvisor> advisors = new HashMap<>();
    private final Map<String, StringBuilder> histories = new HashMap<>();
    //aacceso a bedrock
    public OpinionesController(ChatClient chatClient) {
        this.chatClient = chatClient;
    }



    @GetMapping("/{usuario}/pregunta")
    ResponseEntity<String> preguntar(@PathVariable("usuario") String usuario,
                     @RequestParam String pregunta) {
        histories.computeIfAbsent(usuario, u -> new StringBuilder());

        StringBuilder history = histories.get(usuario);
        history.append("Usuario: ").append(pregunta).append("\n");


        String respuesta = this.chatClient
                .prompt()
                .user(history.toString())
                .call()
                .content();

        history.append("AI: ").append(respuesta).append("\n");

        return ResponseEntity.ok(respuesta);
    }

}
