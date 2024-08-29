package com.unb.fga.calorieexplorer.service;

import com.unb.fga.calorieexplorer.model.UsuarioEntity;
import com.unb.fga.calorieexplorer.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {
    @Autowired
    UsuarioRepository usuarioRepository;

    public List<UsuarioEntity> getAllUsuarios() {
        return usuarioRepository.findAll();
    }
}

