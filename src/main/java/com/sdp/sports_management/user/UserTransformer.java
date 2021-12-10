package com.sdp.sports_management.user;

import com.sdp.sports_management.Exception.ResourceNotFoundException;
import com.sdp.sports_management.bean.User;
import com.sdp.sports_management.repository.UserRepository;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Component
public class UserTransformer {

    @Resource
    private UserRepository userRepository;

    public List<UserDto> toDtos(List<User> users) {
        return users.stream().map(this::toDto).collect(Collectors.toList());
    }

    public UserDto toDto(User user) {
        UserDto dto = new UserDto();
        dto.setUserId(user.getUser_id());
        dto.setFirstName(user.getFirstName());
        dto.setLastName(user.getLastName());
        return dto;
    }

    public List<User> toEntities(List<UserDto> members) {
        List<User> users = new ArrayList<>();
        for (UserDto dto : members) {
            users.add(toEntity(dto));
        }
        return users;
    }

    private User toEntity(UserDto dto) {
        User user;
        boolean isNew = Objects.isNull(dto.getUserId());
        if (isNew) {
            user = new User();
        } else {
            user = userRepository.findByUserId(dto.getUserId());
            if (user == null)
                throw new ResourceNotFoundException("User with user id: " + dto.getUserId() + " not found");
        }
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        user.setContactNumber(dto.getContactNumber());
        user.setPassword(dto.getPassword());
        user.setEmailId(dto.getEmailId());
        return user;
    }
}
