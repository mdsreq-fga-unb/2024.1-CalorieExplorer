package com.unb.fga.calorieexplorer.service;

import com.unb.fga.calorieexplorer.model.UsuarioEntity;
import com.unb.fga.calorieexplorer.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {
    @Autowired
    UsuarioRepository usuarioRepository;

    public List<UsuarioEntity> getAllUsuarios() {
        return usuarioRepository.findAll();
    }

    public Optional<UsuarioEntity> getUsuarioById(Integer id) {
        return usuarioRepository.findById(id);
    }

    public UsuarioEntity createUsuario(UsuarioEntity usuario) {
        return usuarioRepository.save(usuario);
    }

    public void deleteUsuario(Integer id) {
        Optional<UsuarioEntity> idUsuario = usuarioRepository.findById(id);
        if (idUsuario.isEmpty()) {
            throw new RuntimeException("usuario nao encontrado");
        }
        usuarioRepository.deleteById(id);
    }
}

