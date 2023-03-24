package com.tomoni.Repository;

import com.tomoni.Entity.ServerInstanceEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServerInstanceRepository extends JpaRepository<ServerInstanceEntity,Long> {
}
