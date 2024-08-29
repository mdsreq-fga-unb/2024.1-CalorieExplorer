package com.unb.fga.calorieexplorer.controller;

import com.unb.fga.calorieexplorer.model.UsuarioEntity;
import com.unb.fga.calorieexplorer.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/calorie-counter")
@RestController
public class UsuarioController {
    @Autowired
    UsuarioService usuarioService;

    @GetMapping("/usuarios")
    public List<UsuarioEntity> getAll(){
       return usuarioService.getAllUsuarios();
    }

}
