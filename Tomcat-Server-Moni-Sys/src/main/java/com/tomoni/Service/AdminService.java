package com.tomoni.Service;

import com.tomoni.Entity.AdminEntity;

import java.util.List;
import java.util.Optional;

public interface AdminService {
    List<AdminEntity> findAllAdmin();
    Optional<AdminEntity> findById(int admin_id);
    AdminEntity saveAdmin(AdminEntity adminEntity);
    AdminEntity updateAdmin(AdminEntity adminEntity);
    void deleteAdmin(int admin_id);

}
