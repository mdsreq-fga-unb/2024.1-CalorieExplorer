package com.unb.fga.calorieexplorer.controller;

import com.unb.fga.calorieexplorer.dto.LoginDTO;
import com.unb.fga.calorieexplorer.model.UsuarioEntity;
import com.unb.fga.calorieexplorer.service.UsuarioService;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/api/usuarios")
@CrossOrigin("*")
@RestController
public class UsuarioController {
    @Autowired
    UsuarioService usuarioService;

    @GetMapping
    public List<UsuarioEntity> getAll() {
        return usuarioService.getAllUsuarios();
    }

    @GetMapping("/{id}")
    public Optional<UsuarioEntity> getUsuarioById(@PathVariable("id") Integer id) {
        return usuarioService.getUsuarioById(id);
    }

    @PostMapping
    public ResponseEntity<UsuarioEntity> createUsuario(@RequestBody UsuarioEntity usuario) {
        UsuarioEntity user = usuarioService.createUsuario(usuario);
        return ResponseEntity.ok().body(user);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<UsuarioEntity> deleteUsuarioById(@PathVariable("id") Integer id) {
        usuarioService.deleteUsuario(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDTO loginDTO) {
        boolean existeUsuario = usuarioService.efetuarLogin(loginDTO);
        if (existeUsuario) {
            return ResponseEntity.ok().body("usuario logado com sucesso");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
