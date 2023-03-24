package com.tomoni.Service;

import com.tomoni.Entity.ServerInstanceEntity;

import java.util.List;
import java.util.Optional;

public interface ServerInstanceService {
    List<ServerInstanceEntity> findAllServerInstances();
    Optional<ServerInstanceEntity> findById(Long instance_id);
    ServerInstanceEntity saveServerInstance(ServerInstanceEntity serverInstance);
    ServerInstanceEntity updateServerInstance(ServerInstanceEntity serverInstance);
    void deleteServerInstance(Long instance_id);
}
