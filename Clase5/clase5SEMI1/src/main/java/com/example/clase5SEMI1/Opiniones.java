package com.example.clase5SEMI1;

import org.springframework.data.annotation.Id;

public record Opiniones(@Id Long id, String autor, String equipo, String opinion){}
