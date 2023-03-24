package com.tomoni.Service.impl;

import com.tomoni.Entity.ApplicationEntity;
import com.tomoni.Repository.ApplicationRepository;
import com.tomoni.Service.ApplicationService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ApplicationServiceImpl implements ApplicationService {

    private final ApplicationRepository applicationRepository;

    public ApplicationServiceImpl(ApplicationRepository applicationRepository) {
        this.applicationRepository = applicationRepository;
    }

    @Override
    public List<ApplicationEntity> findAllApplications() {
        return applicationRepository.findAll();
    }

    @Override
    public Optional<ApplicationEntity> findById(Long app_id) {
        return applicationRepository.findById(app_id);
    }

    @Override
    public ApplicationEntity saveApplication(ApplicationEntity application) {
        return applicationRepository.save(application);
    }

    @Override
    public ApplicationEntity updateApplication(ApplicationEntity application) {
        return applicationRepository.save(application);
    }

    @Override
    public void deleteApplication(Long app_id) {
        applicationRepository.deleteById(app_id);
    }
}
