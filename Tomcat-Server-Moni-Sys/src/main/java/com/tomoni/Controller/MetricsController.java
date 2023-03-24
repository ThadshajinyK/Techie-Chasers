package com.tomoni.Controller;

import com.tomoni.Entity.ApplicationEntity;
import com.tomoni.Entity.MetricsEntity;
import com.tomoni.Service.MetricsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/performanceMetrics")
public class MetricsController {

    private final MetricsService metricsService;

    public MetricsController(MetricsService metricsService) {
        this.metricsService = metricsService;
    }

    @GetMapping
    public List<MetricsEntity> findAllMetrics(){
        return metricsService.findAllMetrics();
    }

    @GetMapping("/{metric_id}")
    public Optional<MetricsEntity> findById(@PathVariable("metric_id") Long metric_id){
        return metricsService.findById(metric_id);
    }

    @PostMapping
    public MetricsEntity saveMetrics(@RequestBody MetricsEntity metricsEntity){
        return metricsService.saveMetric(metricsEntity);
    }

    @PutMapping
    public MetricsEntity updateMetrics(@RequestBody MetricsEntity metricsEntity){
        return metricsService.updateMetric(metricsEntity);
    }


    @DeleteMapping("/{metric_id}")
    public void deleteMetrics(@PathVariable("metric_id") Long metric_id)
    {
        metricsService.deleteMetric(metric_id);    }
}
