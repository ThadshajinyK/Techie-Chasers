package com.tomoni.Service.impl;

import com.tomoni.Entity.ServerEntity;
import com.tomoni.Repository.ServerRepository;
import com.tomoni.Service.ServerService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServerServiceImpl implements ServerService {

    private final ServerRepository serverRepository;

    public ServerServiceImpl(ServerRepository serverRepository) {
        this.serverRepository = serverRepository;
    }

    @Override
    public List<ServerEntity> findAllServers() {
        return serverRepository.findAll();
    }

    @Override
    public Optional<ServerEntity> findById(Long server_id) {
        return serverRepository.findById(server_id);
    }

    @Override
    public ServerEntity saveServer(ServerEntity server) {
        return serverRepository.save(server);
    }

    @Override
    public ServerEntity updateServer(ServerEntity server) {
        return serverRepository.save(server);
    }

    @Override
    public void deleteServer(Long server_id) {
        serverRepository.deleteById(server_id);
    }
}
