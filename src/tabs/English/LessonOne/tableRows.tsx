import { ReactNode } from "react";
import styles from "./LessonOne.module.css";
import { pronouns } from "../../../constants/englishWords";

type CellType = {
    id: number;
    type: string;
    content: ReactNode;
}

type RowType = {
    questionCell: CellType;
    statementCell: CellType;
    negativeCell: CellType;
    tensesCell: ReactNode;
}

export const getRows = (verb: string): RowType[] => [
    {
        questionCell: {
            id: 1,
            type: "question",
            content: (
                <div className={styles.questionCell}>
                    <div aria-label="auxiliary verb" className={styles.auxiliaryVerb}>Will</div>
                    <div className={styles.pronouns}>
                        {
                            pronouns.map((pronoun, index) => <span key={index}>{pronoun}</span>)
                        }
                    </div>
                    <div className={styles.verb}><p><span aria-label="verb">{verb}</span>?</p></div>

                </div>
            )
        },
        statementCell: {
            id: 2,
            type: "statement",
            content: (
                <div className={styles.statementCell}>
                    <div className={styles.pronouns}>
                        {
                            pronouns.map((pronoun, index) => <span key={index}>{pronoun}</span>)
                        }
                    </div>
                    <div aria-label="auxiliary verb" className={styles.statementAuxiliaryVerb}>will</div>
                    <div className={styles.verb}><p><span aria-label="verb">{verb}</span></p></div>

                </div>
            )
        },
        negativeCell: {
            id: 3,
            type: "negative",
            content: (
                <div className={styles.negativeCell}>
                    <div className={styles.pronouns}>
                        {
                            pronouns.map((pronoun, index) => <span key={index}>{pronoun}</span>)
                        }
                    </div>
                    <div aria-label="auxiliary verb" className={styles.negativeAuxiliaryVerb}>will not (won't)</div>
                    <div className={styles.verb}><p><span aria-label="verb">{verb}</span></p></div>

                </div>
            )
        },
        tensesCell: (
            <div className={styles.verticalCell}>
                Будущее
            </div>
        )
    },
    {
        questionCell: {
            id: 4,
            type: "question",
            content: (
                <div className={styles.presentQuestionCell}>
                    <div className={styles.questionCell}>
                        <div aria-label="auxiliary verb" className={styles.auxiliaryVerb}>Do</div>
                        <div className={styles.pronouns}>
                            {
                                pronouns.slice(0, 4).map((pronoun, index) => <span key={index}>{pronoun}</span>)
                            }
                        </div>
                        <div className={styles.verb}><p><span aria-label="verb">{verb}</span>?</p></div>
                    </div>
                    <div className={`${styles.thirdPerson} ${styles.questionCell}`}>
                        <div aria-label="auxiliary verb" className={styles.auxiliaryVerb}>Does</div>
                        <div className={styles.pronouns}>
                            {
                                pronouns.slice(4).map((pronoun, index) => <span key={index}>{pronoun}</span>)
                            }
                        </div>
                        <div className={styles.verb}><p><span aria-label="verb">{verb}</span>?</p></div>
                    </div>
                </div>
            )
        },
        statementCell: {
            id: 2,
            type: "statement",
            content: (
                <div className={styles.presentStatementCell}>
                    <div className={styles.statementCell}>
                        <div className={styles.pronouns}>
                            {
                                pronouns.slice(0, 4).map((pronoun, index) => <span key={index}>{pronoun}</span>)
                            }
                        </div>
                        <div className={styles.verb}><p><span aria-label="verb">{verb}</span></p></div>
                    </div>
                    <div className={`${styles.thirdPerson} ${styles.statementCell}`}>
                        <div className={styles.pronouns}>
                            {
                                pronouns.slice(4).map((pronoun, index) => <span key={index}>{pronoun}</span>)
                            }
                        </div>
                        <div className={styles.verb}><p><span aria-label="verb">{verb}(<span className={styles.ending}>s/es/ies</span>)</span></p></div>
                    </div>
                </div>
            )
        },
        negativeCell: {
            id: 3,
            type: "negative",
            content: (
                <div className={styles.presentNegativetCell}>
                    <div className={styles.negativeCell}>
                        <div className={styles.pronouns}>
                            {
                                pronouns.slice(0, 4).map((pronoun, index) => <span key={index}>{pronoun}</span>)
                            }
                        </div>
                        <div aria-label="auxiliary verb" className={styles.auxiliaryVerb}>do not (don't)</div>
                        <div className={styles.verb}><span aria-label="verb">{verb}</span></div>
                    </div>
                    <div className={`${styles.thirdPerson} ${styles.negativeCell}`}>
                        <div className={styles.pronouns}>
                            {
                                pronouns.slice(4).map((pronoun, index) => <span key={index}>{pronoun}</span>)
                            }
                        </div>
                        <div aria-label="auxiliary verb" className={styles.negativeAuxiliaryVerb}>does not (doesn't)</div>
                        <div className={styles.verb}><span aria-label="verb">{verb}</span></div>
                    </div>
                </div>
            )
        },
        tensesCell: (
            <div className={styles.verticalCell}>
                Настоящее
            </div>
        )
    }
];