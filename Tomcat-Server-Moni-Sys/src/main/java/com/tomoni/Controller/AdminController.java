package com.tomoni.Controller;

import com.tomoni.Entity.AdminEntity;
import com.tomoni.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/admin")
public class AdminController {

@Autowired
    private final AdminService adminService;


    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping
    public List<AdminEntity> findAllAdmin(){
        return adminService.findAllAdmin();
    }

    @GetMapping("/{id}")
    public Optional<AdminEntity> findById(@PathVariable("id") int admin_id){
        return adminService.findById(admin_id);
    }

    @PostMapping
    public AdminEntity saveAdmin(@RequestBody AdminEntity adminEntity){
        return adminService.saveAdmin(adminEntity);
    }

    @PutMapping
    public AdminEntity updateAdmin(@RequestBody AdminEntity adminEntity){
        return adminService.updateAdmin(adminEntity);
    }


    @DeleteMapping("/{id}")
    public void deleteAdmin(@PathVariable("id") int admin_id)
    {
     adminService.deleteAdmin(admin_id);
    }

}
