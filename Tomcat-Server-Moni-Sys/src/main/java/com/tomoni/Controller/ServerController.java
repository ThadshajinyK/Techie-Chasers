package com.tomoni.Controller;

import com.tomoni.Entity.AdminEntity;
import com.tomoni.Entity.ServerEntity;
import com.tomoni.Service.ServerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/servers")
public class ServerController {
    @Autowired
    private final ServerService serverService;

    public ServerController(ServerService serverService) {
        this.serverService = serverService;
    }

    @GetMapping
    public List<ServerEntity> findAllServers(){
       return serverService.findAllServers();
    }

    @GetMapping("/{server_id}")
    public Optional<ServerEntity> findById(@PathVariable("server_id") Long server_id){
        return serverService.findById(server_id);
    }

    @PostMapping
    public ServerEntity saveServer(@RequestBody ServerEntity serverEntity){
        return serverService.saveServer(serverEntity);
    }

    @PutMapping
    public ServerEntity updateAdmin(@RequestBody ServerEntity serverEntity){
        return serverService.updateServer(serverEntity);
    }


    @DeleteMapping("/{server_id}")
    public void deleteServer(@PathVariable("server_id") Long server_id)
    {
        serverService.deleteServer(server_id);    }


}
