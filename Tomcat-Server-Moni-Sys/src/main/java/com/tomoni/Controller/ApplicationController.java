package com.tomoni.Controller;

import com.tomoni.Entity.ApplicationEntity;
import com.tomoni.Service.ApplicationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/applications")
public class ApplicationController {

    private final ApplicationService applicationService;

    public ApplicationController(ApplicationService applicationService) {
        this.applicationService = applicationService;
    }

    @GetMapping
    public List<ApplicationEntity> findAllApplications(){
        return applicationService.findAllApplications();
    }

    @GetMapping("/{app_id}")
    public Optional<ApplicationEntity> findById(@PathVariable("app_id") Long app_id){
        return applicationService.findById(app_id);
    }

    @PostMapping
    public ApplicationEntity saveApplication(@RequestBody ApplicationEntity applicationEntity){
        return applicationService.saveApplication(applicationEntity);
    }

    @PutMapping
    public ApplicationEntity updateApplication(@RequestBody ApplicationEntity applicationEntity){
        return applicationService.updateApplication(applicationEntity);
    }


    @DeleteMapping("/{app_id}")
    public void deleteApplication(@PathVariable("app_id") Long app_id)
    {
        applicationService.deleteApplication(app_id);    }
}
