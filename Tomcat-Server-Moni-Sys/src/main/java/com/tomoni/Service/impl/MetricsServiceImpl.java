package com.tomoni.Service.impl;

import com.tomoni.Entity.MetricsEntity;
import com.tomoni.Repository.MetricsRepository;
import com.tomoni.Service.MetricsService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MetricsServiceImpl implements MetricsService {

    private final MetricsRepository metricsRepository;

    public MetricsServiceImpl(MetricsRepository metricsRepository) {
        this.metricsRepository = metricsRepository;
    }

    @Override
    public List<MetricsEntity> findAllMetrics() {
        return metricsRepository.findAll();
    }

    @Override
    public Optional<MetricsEntity> findById(Long metric_id) {
        return metricsRepository.findById(metric_id);
    }

    @Override
    public MetricsEntity saveMetric(MetricsEntity metric) {
        return metricsRepository.save(metric);
    }

    @Override
    public MetricsEntity updateMetric(MetricsEntity metric) {
        return metricsRepository.save(metric);
    }

    @Override
    public void deleteMetric(Long metric_id) {
        metricsRepository.deleteById(metric_id);
    }
}
