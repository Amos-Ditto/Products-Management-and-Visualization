from django.db import models
from django.contrib.auth.models import AbstractBaseUser

from .manager import UserManager


class CustomUser(AbstractBaseUser):

    Email = models.EmailField(unique=True, max_length=80)
    Name = models.CharField(max_length=50, null=True, blank=True)
    date_created = models.DateField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'Email'
    REQUIRED_FIELDS = ['Name']

    class Meta:
        verbose_name = 'Users'
        verbose_name_plural = 'Users'


    def __str__(self):
        return self.Email
    
    def has_perm(self, perm, obj=None):
        return True
    
    def has_module_perms(self, app_label):
        return True
    
    @property
    def is_staff(self):
        return self.is_admin