package com.tomoni.Service.impl;

import com.tomoni.Entity.ServerInstanceEntity;
import com.tomoni.Repository.ServerInstanceRepository;
import com.tomoni.Service.ServerInstanceService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServerInstanceServiceImpl implements ServerInstanceService {

    private final ServerInstanceRepository serverInstanceRepository;

    public ServerInstanceServiceImpl(ServerInstanceRepository serverInstanceRepository) {
        this.serverInstanceRepository = serverInstanceRepository;
    }

    @Override
    public List<ServerInstanceEntity> findAllServerInstances() {
        return serverInstanceRepository.findAll();
    }

    @Override
    public Optional<ServerInstanceEntity> findById(Long instance_id) {
        return serverInstanceRepository.findById(instance_id);
    }

    @Override
    public ServerInstanceEntity saveServerInstance(ServerInstanceEntity serverInstance) {
        return serverInstanceRepository.save(serverInstance);
    }

    @Override
    public ServerInstanceEntity updateServerInstance(ServerInstanceEntity serverInstance) {
        return serverInstanceRepository.save(serverInstance);
    }

    @Override
    public void deleteServerInstance(Long instance_id) {
        serverInstanceRepository.deleteById(instance_id);
    }
}
