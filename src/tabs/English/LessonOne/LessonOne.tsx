import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    MenuItem,
    Select,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "./LessonOne.module.css";
import { useState } from "react";
import { commonVerbs } from "../../../constants/englishWords";
import { getRows } from "./tableRows";
import { Clear } from "@mui/icons-material";

const LessonOne = () => {
    const [verb, setVerb] = useState(commonVerbs[0].value);
    const [selectedVerb, setSelectedVerb] = useState(commonVerbs[0].value);
    const [showTranslation, setShowTranslation] = useState(false);
    const [userWord, setUserWord] = useState("");

    const handleChange = (event: any) => {
        setUserWord("")
        setSelectedVerb(event.target.value);
        setVerb(event.target.value);
    };

    const handleShowTranslation = () => {
        setShowTranslation(!showTranslation);
    };

    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">Смотреть видео</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <iframe
                        src="https://drive.google.com/file/d/1IqLYmMyk6mjlcny1pkRdoRCkT1UF6ah_/preview"
                        width="640"
                        height="480"
                        title="English: lesson one"
                    ></iframe>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography component="span">Таблица</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <div className={styles.controlsContainer}>
                            <div className={styles.controls}>
                                <FormControl sx={{ width: 200 }}>
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

                                <FormControl sx={{ width: 200 }} className={styles.userWord}>

                                    <Input placeholder="Свое слово (глагол)" value={userWord} onChange={(e) => setUserWord(e.target.value)} size="small" />


                                </FormControl>
                                <Button size="small" onClick={() => setUserWord("")}>
                                    <Clear />
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
                                {getRows(userWord || verb).map((row, index) => (
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
                </AccordionDetails>
            </Accordion>

        </>

    );
};

export default LessonOne;
