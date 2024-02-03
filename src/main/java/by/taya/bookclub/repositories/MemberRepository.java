package by.taya.bookclub.repositories;

import by.taya.bookclub.models.Member;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;


@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
}
