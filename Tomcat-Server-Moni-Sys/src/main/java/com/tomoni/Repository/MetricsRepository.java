package com.tomoni.Repository;

import com.tomoni.Entity.MetricsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MetricsRepository extends JpaRepository<MetricsEntity,Long>{

}
