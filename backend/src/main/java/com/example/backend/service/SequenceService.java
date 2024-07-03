package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import com.example.backend.model.Sequence;

@Service
public class SequenceService {
    @Autowired
    private MongoOperations mongoOperations;

    public int getNextSequence(String seqName) {
        Sequence sequence = mongoOperations.findAndModify(
            Query.query(Criteria.where("_id").is(seqName)),
            new Update().inc("seq", 1),
            FindAndModifyOptions.options().returnNew(true).upsert(true),
            Sequence.class
        );
        return sequence != null ? sequence.getSeq() : 1;
    }
}
