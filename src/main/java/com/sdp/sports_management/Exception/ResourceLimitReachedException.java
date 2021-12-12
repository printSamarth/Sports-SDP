package com.sdp.sports_management.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.EXPECTATION_FAILED)
public class ResourceLimitReachedException extends RuntimeException {
    private static final long serialVersionUID = 1343354353L;

    public ResourceLimitReachedException(String message) {
        super(message);
    }
}
