import {
    Button,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";
import styles from "./LessonOne.module.css";
import { useState } from "react";
import { commonVerbs } from "../../../constants/englishWords";
import { getRows } from "./tableRows";

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
    };

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
                            {commonVerbs.sort((a, b) => a.label.localeCompare(b.label)).map((verb) => (
                                <MenuItem key={verb.value} value={verb.value}>
                                    {verb.label}
                                    {showTranslation && ` - ${verb.translation}`}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Button
                        size="small"
                        variant="contained"
                        onClick={handleShowTranslation}
                    >
                        {showTranslation ? "Скрыть перевод" : "Показать перевод"}
                    </Button>
                </div>

                <FormHelperText sx={{ minHeight: "20px" }}>
                    {showTranslation &&
                        commonVerbs.find((verb) => verb.value === selectedVerb)
                            ?.translation}
                </FormHelperText>
            </div>

            <Table
                sx={{ minWidth: "650px" }}
                aria-label="base verbs table"
                border={1}
            >
                <TableHead>
                    <TableRow>
                        <TableCell align="center" className={styles.headerCell}>
                            Вопрос (?)
                        </TableCell>
                        <TableCell align="center" className={styles.headerCell}>
                            Утверждение (+)
                        </TableCell>
                        <TableCell align="center" className={styles.headerCell}>
                            Отрицание (-)
                        </TableCell>
                        <TableCell aria-label="tenses column"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {getRows(verb).map((row, index) => (
                        <TableRow key={index}>
                            <TableCell sx={{ width: "30%" }}>
                                {row.questionCell.content}
                            </TableCell>
                            <TableCell sx={{ width: "30%" }}>
                                {row.statementCell.content}
                            </TableCell>
                            <TableCell sx={{ width: "30%" }}>
                                {row.negativeCell.content}
                            </TableCell>
                            <TableCell sx={{ width: "10%" }}>{row.tensesCell}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default LessonOne;
