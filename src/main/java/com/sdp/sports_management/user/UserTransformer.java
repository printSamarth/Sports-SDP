package com.sdp.sports_management.user;

import com.sdp.sports_management.bean.User;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class UserTransformer {

    public List<UserDto> toDtos(List<User> users) {
        return users.stream().map(this::toDto).collect(Collectors.toList());
    }

    public UserDto toDto(User user) {
        UserDto dto = new UserDto();
        dto.setFirstName(user.getFirstName());
        dto.setLastName(user.getLastName());
        return dto;
    }
}
