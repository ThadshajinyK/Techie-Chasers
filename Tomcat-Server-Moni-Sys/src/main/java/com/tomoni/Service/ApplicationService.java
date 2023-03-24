package com.tomoni.Service;

import com.tomoni.Entity.ApplicationEntity;
import com.tomoni.Entity.ApplicationEntity;
import com.tomoni.Entity.ApplicationEntity;
import com.tomoni.Entity.ServerInstanceEntity;

import java.util.List;
import java.util.Optional;

public interface ApplicationService {
    List<ApplicationEntity> findAllApplications();
    Optional<ApplicationEntity> findById(Long application);

    ApplicationEntity saveApplication(ApplicationEntity application);

    ApplicationEntity updateApplication(ApplicationEntity application);
    void deleteApplication(Long app_id);
}
