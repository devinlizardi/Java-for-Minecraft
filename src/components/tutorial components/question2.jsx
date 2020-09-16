import React from 'react';
import AnswerItem from './answerItem';

function Question2() {
    return(
        <div>
        <div className="question-block">
            <p>How could you describe a Glowstone block with attributes, given the example above?</p>
            <div className="answers">
                <AnswerItem ans="A bright block!" value="incorrect">
                Yes... but it won't quite work in code! In Java we need to describe blocks by their attributes,
                    which are essentially just variables.
                </AnswerItem>
                <AnswerItem ans="hardness: 1 | drops_self?: false | luminance: 1.0" value="correct">
                    Perfect! The attributes don't include information like "only spawns in nether" or "the texture could
                        be better but at least it's bright," because those aren't variables (at least that we're using).
                </AnswerItem>
            </div>
        </div>
        <br />
        <div className="question-block">
            <p>Let's try working backwards: what block do you think these attributes might describe? This one is okay to guess, 
                try to think about why it's an unfair question.
                <br /> <br />
                hardness: 50 | drops_self?: true | luminance: 0
            </p>
            <div className="answers">
                <AnswerItem ans="Diamond Ore" value="incorrect">
                    We know that Diamond Ore has different attributes so it can't be this!
                </AnswerItem>
                <AnswerItem ans="Glass" value="">
                    There's nothing here that explicitly says that these attributes <em> don't </em> describe a glass block,
                    but because the hardness variable is much stronger than any of the other examples it's probably not glass, one
                    of the weakest blocks in the game.
                </AnswerItem>
                <AnswerItem ans="Obsidian" value="correct">
                    It absolutely could be Obsidian! These attributes give us an idea about what the block is, and Obsidian matches great.
                        However, it's important to note the attributes might not <em> only </em> describe Obsidian.
                </AnswerItem>
                <AnswerItem ans="Block of Netherite" value="correct">
                    A Block of Netherite actually has almost the same stats as Obsidian, so this small this of attributes it's perfectly
                        valid to describe this as well!
                </AnswerItem>
            </div>
        </div>
        </div>
    );
}

export default Question2;