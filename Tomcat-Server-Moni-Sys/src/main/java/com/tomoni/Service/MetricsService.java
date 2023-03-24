package com.tomoni.Service;

import com.tomoni.Entity.MetricsEntity;
import com.tomoni.Entity.ApplicationEntity;
import com.tomoni.Entity.MetricsEntity;

import java.util.List;
import java.util.Optional;

public interface MetricsService {
    List<MetricsEntity> findAllMetrics();
    Optional<MetricsEntity> findById(Long metric_id);
    MetricsEntity saveMetric(MetricsEntity metric);
    MetricsEntity updateMetric(MetricsEntity metric);
    void deleteMetric(Long metric_id);
}
