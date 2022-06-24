from django.contrib.auth.models import BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, Email, Name, password=None):
        if not Email:
            raise ValueError('you must enter your Email')
        if not Name:
            raise ValueError('you must enter your Name')

        user = self.model(Email=Email, Name = Name)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, Email, Name, password=None):
        user = self.create_user(Email, Name, password)
        user.is_admin = True
        user.save(using=self._db)
        return user