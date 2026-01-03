import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import styles from "./LessonOne.module.css";
import { useState } from "react";
import { commonVerbs, pronouns } from "../../../constants/englishWords";




const LessonOne = () => {

    const [verb, setVerb] = useState(commonVerbs[0].value);
    const [selectedVerb, setSelectedVerb] = useState(commonVerbs[0].value);
    const [showTranslation, setShowTranslation] = useState(false);

    const handleChange = (event: any) => {
        setSelectedVerb(event.target.value);
        setVerb(event.target.value);
    };

    const handleShowTranslation = () => {
        setShowTranslation(!showTranslation);
    }

    return (
        <div>
            <div className={styles.controlsContainer}>
                <div className={styles.controls}>
                    <FormControl sx={{ width: 200 }} className={styles.verbSelect}>
                        <InputLabel id="verb-select-label">Выбрать глагол</InputLabel>

                        <Select
                            labelId="verb-select-label"
                            id="verb-select"
                            value={selectedVerb}
                            label="Выбрать глагол"
                            onChange={handleChange}
                            size="small"

                        >
                            {commonVerbs.map((verb) => (
                                <MenuItem key={verb.value} value={verb.value}>
                                    {verb.label}
                                    {showTranslation && ` - ${verb.translation}`}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Button size="small" variant="contained" onClick={handleShowTranslation}>{showTranslation ? "Скрыть перевод" : "Показать перевод"}</Button>
                </div>

                <FormHelperText sx={{ minHeight: "20px" }}>{
                    showTranslation && commonVerbs.find((verb) => verb.value === selectedVerb)?.translation
                }</FormHelperText>
            </div>



            <Table sx={{ minWidth: "650px" }} aria-label="base verbs table" border={1}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center" className={styles.headerCell}>Вопрос (?)</TableCell>
                        <TableCell align="center" className={styles.headerCell}>Утверждение (+)</TableCell>
                        <TableCell align="center" className={styles.headerCell}>Отрицание (-)</TableCell>
                        <TableCell aria-label="tenses column"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell sx={{ width: "30%" }} >
                            <div className={styles.questionCell}>
                                <div aria-label="auxiliary verb" className={styles.auxiliaryVerb}>Will</div>
                                <div className={styles.pronouns}>
                                    {
                                        pronouns.map((pronoun, index) => <span key={index}>{pronoun}</span>)
                                    }
                                </div>
                                <div className={styles.verb}><p><span aria-label="verb">{verb}</span>?</p></div>

                            </div>

                        </TableCell>
                        <TableCell sx={{ width: "30%" }}>
                            <div className={styles.statementCell}>
                                <div className={styles.pronouns}>
                                    {
                                        pronouns.map((pronoun, index) => <span key={index}>{pronoun}</span>)
                                    }
                                </div>
                                <div aria-label="auxiliary verb" className={styles.auxiliaryVerb}>will</div>
                                <div className={styles.verb}><p><span aria-label="verb">{verb}</span></p></div>

                            </div>

                        </TableCell>
                        <TableCell sx={{ width: "30%" }}>
                            <div className={styles.negativeCell}>
                                <div className={styles.pronouns}>
                                    {
                                        pronouns.map((pronoun, index) => <span key={index}>{pronoun}</span>)
                                    }
                                </div>
                                <div aria-label="auxiliary verb" className={styles.auxiliaryVerb}>will not (won't)</div>
                                <div className={styles.verb}><p><span aria-label="verb">{verb}</span></p></div>

                            </div>
                        </TableCell>
                        <TableCell aria-label="tenses column" sx={{ width: "10%" }}>
                            <div className={styles.verticalCell}>
                                Будущее
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </div>
    )
}

export default LessonOne;