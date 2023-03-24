package com.tomoni.Service.impl;

import com.tomoni.Entity.AdminEntity;
import com.tomoni.Repository.AdminRepository;
import com.tomoni.Service.AdminService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminServiceImpl implements AdminService {
    public final AdminRepository adminRepository;

    public AdminServiceImpl(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    @Override
    public List<AdminEntity> findAllAdmin() {
        return adminRepository.findAll();
    }

    @Override
    public Optional<AdminEntity> findById(int admin_id) {
        return adminRepository.findById(admin_id);
    }

    @Override
    public AdminEntity saveAdmin(AdminEntity adminEntity) {
        return adminRepository.save(adminEntity);
    }

    @Override
    public AdminEntity updateAdmin(AdminEntity adminEntity) {
        return adminRepository.save(adminEntity);
    }

    @Override
    public void deleteAdmin(int admin_id) {
        adminRepository.deleteById(admin_id);
    }
}
