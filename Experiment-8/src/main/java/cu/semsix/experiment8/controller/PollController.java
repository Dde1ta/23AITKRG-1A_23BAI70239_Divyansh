package cu.semsix.experiment8.controller;

import cu.semsix.experiment8.model.Poll;
import cu.semsix.experiment8.repository.PollRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/polls")
public class PollController {

    @Autowired
    private PollRepository pollRepository;

    // Anyone authenticated can view polls
    @GetMapping
    public List<Poll> getAllPolls() {
        return pollRepository.findAll();
    }

    // Authorization: Only ADMINs can create polls
    @PreAuthorize("hasAuthority('SCOPE_ADMIN')") // Note: Google JWTs translate roles to SCOPES
    @PostMapping("/create")
    public Poll createPoll(@RequestBody Poll poll) {
        return pollRepository.save(poll);
    }

    // Authorization: USER or ADMIN can vote
    @PreAuthorize("hasAnyAuthority('SCOPE_USER', 'SCOPE_ADMIN')")
    @PostMapping("/{id}/vote/yes")
    public Poll voteYes(@PathVariable Long id) {
        Poll poll = pollRepository.findById(id).orElseThrow();
        poll.setYesVotes(poll.getYesVotes() + 1);
        return pollRepository.save(poll);
    }
}