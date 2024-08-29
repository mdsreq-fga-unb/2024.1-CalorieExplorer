package com.unb.fga.calorieexplorer.controller;

import com.unb.fga.calorieexplorer.model.UsuarioEntity;
import com.unb.fga.calorieexplorer.service.UsuarioService;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/api")
@RestController
public class UsuarioController {
    @Autowired
    UsuarioService usuarioService;

    @GetMapping("/usuarios")
    public List<UsuarioEntity> getAll(){
       return usuarioService.getAllUsuarios();
    }

    @GetMapping("/usuarios/{id}")
    public Optional<UsuarioEntity> getUsuarioById(@PathVariable("id") Integer id){
        return usuarioService.getUsuarioById(id);
    }

    @PostMapping("/usuarios")
    public ResponseEntity<UsuarioEntity> createUsuario(@RequestBody UsuarioEntity usuario){
        UsuarioEntity user = usuarioService.createUsuario(usuario);
        return ResponseEntity.ok().body(user);
    }

    @DeleteMapping("/usuarios/{id}")
    public ResponseEntity<UsuarioEntity> deleteUsuarioById(@PathVariable("id") Integer id){
        usuarioService.deleteUsuario(id);
        return ResponseEntity.noContent().build();
    }
}
