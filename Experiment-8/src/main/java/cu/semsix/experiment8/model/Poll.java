package cu.semsix.experiment8.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Poll {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String question;
    private int yesVotes = 0;
    private int noVotes = 0;
}