package com.tomoni.Service;

import com.tomoni.Entity.ServerEntity;

import java.util.List;
import java.util.Optional;

public interface ServerService {
    List<ServerEntity> findAllServers();
    Optional<ServerEntity> findById(Long server_id);
    ServerEntity saveServer(ServerEntity server);
    ServerEntity updateServer(ServerEntity server);
    void deleteServer(Long server_id);
}
