package cu.semsix.experiment8;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

// These static imports are required for the mockMvc.perform() methods
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.jwt;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc // This allows us to make fake HTTP requests to our own app
class Experiment8ApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void unauthorizedUserCannotViewPolls() throws Exception {
        // We try to GET polls without a token -> Bouncer should return 401
        mockMvc.perform(get("/api/polls"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    void authenticatedUserCanViewPolls() throws Exception {
        // We attach a default fake JWT -> Bouncer should let us in (200 OK)
        mockMvc.perform(get("/api/polls").with(jwt()))
                .andExpect(status().isOk());
    }

    @Test
    void regularUserCannotCreatePoll() throws Exception {
        String newPollJson = "{\"question\":\"Is this working?\"}";

        // We simulate a token that only has the "USER" role
        mockMvc.perform(post("/api/polls/create")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(newPollJson)
                        .with(jwt().jwt(builder -> builder.claim("scope", "USER"))))
                .andExpect(status().isForbidden()); // 403 Forbidden (Not Allowed!)
    }

    @Test
    void adminUserCanCreatePoll() throws Exception {
        String newPollJson = "{\"question\":\"Is this working?\"}";

        // We simulate a token that has the "ADMIN" role
        mockMvc.perform(post("/api/polls/create")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(newPollJson)
                        .with(jwt().jwt(builder -> builder.claim("scope", "ADMIN"))))
                .andExpect(status().isOk()); // 200 OK (Success!)
    }
}