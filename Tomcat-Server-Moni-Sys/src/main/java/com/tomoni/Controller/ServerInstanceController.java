package com.tomoni.Controller;

import com.tomoni.Entity.ServerEntity;
import com.tomoni.Entity.ServerInstanceEntity;
import com.tomoni.Service.ServerInstanceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/instances")
public class ServerInstanceController {

    private final ServerInstanceService serverInstanceService;

    public ServerInstanceController(ServerInstanceService serverInstanceService) {
        this.serverInstanceService = serverInstanceService;
    }

    @GetMapping
    public List<ServerInstanceEntity> findAllServerInstances(){
        return serverInstanceService.findAllServerInstances();
    }

    @GetMapping("/{instance_id}")
    public Optional<ServerInstanceEntity> findById(@PathVariable("instance_id") Long instance_id){
        return serverInstanceService.findById(instance_id);
    }

    @PostMapping
    public ServerInstanceEntity saveServerInstance(@RequestBody ServerInstanceEntity serverInstanceEntity){
        return serverInstanceService.saveServerInstance(serverInstanceEntity);
    }

    @PutMapping
    public ServerInstanceEntity updateServerInstance(@RequestBody ServerInstanceEntity serverInstanceEntity){
        return serverInstanceService.updateServerInstance(serverInstanceEntity);
    }


    @DeleteMapping("/{instance_id}")
    public void deleteServerInstance(@PathVariable("instance_id") Long instance_id)
    {
        serverInstanceService.deleteServerInstance(instance_id);    }

}
