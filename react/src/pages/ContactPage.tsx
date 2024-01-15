import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Button,
    Select,
    InputLabel,
    FormControl,
    TextField,
    Box,
    MenuItem,
    SelectChangeEvent,
    useTheme,
    Backdrop, CircularProgress, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions
} from "@mui/material";
import {LanguageContext} from "../languages/LanguageContext";
import BASE_URL from "../other/host.config";
import axios from "axios";

export default function InputAdornments() {
    const theme = useTheme();
    const navigate = useNavigate();
    const language = React.useContext(LanguageContext);
    const [open, setOpen] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [feedbackTitle, setFeedbackTitle] = React.useState('');
    const [feedbackMessage, setFeedbackMessage] = React.useState('');
    const [category, setCategory] = React.useState('search');
    const [nameValue, setNameValue] = React.useState('');
    const [emailValue, setEmailValue] = React.useState('');
    const [phoneValue, setPhoneValue] = React.useState('');
    const [messageValue, setMessageValue] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameValue(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmailValue(event.target.value);
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneValue(event.target.value);
    };

    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessageValue(event.target.value);
    };

    const emptyFields = ()=> {
        setCategory("Search");
        setNameValue("");
        setEmailValue("");
        setPhoneValue("");
        setMessageValue("");
    }

    const handleClose = () => {
        setFeedbackTitle("");
        setFeedbackMessage("");
        if (!error) {
            navigate("/")
        }
    };

    const [csrfToken, setCsrfToken] = React.useState('');

    React.useEffect(() => {
        // Fetch CSRF token from Django backend
        axios.get(BASE_URL+'/csrf-token')
            .then(response => {
                setCsrfToken(response.data.csrfToken);
            })
            .catch(error => {
                console.error('Error fetching CSRF token:', error);
            });
    }, []);

    const handleSendEmail = async () => {
        const apiUrl = `${BASE_URL}/send-email`;
        setOpen(true);

        if (nameValue==="" || emailValue==="" || messageValue==="") {
            setOpen(false);
            setError(true)
            setFeedbackTitle(language.ContactPage.request.errorTitle);
            setFeedbackMessage(language.ContactPage.request.incompleteMessage);
            return Promise.resolve();
        }

        const formData = new FormData();
        formData.append('category', category);
        formData.append('name', nameValue);
        formData.append('email', emailValue);
        formData.append('phone', phoneValue);
        formData.append('message', messageValue);

        formData.append('csrfmiddlewaretoken', csrfToken); // Include CSRF token

        try {
            const response = await axios.post(apiUrl, formData, {
                headers: {
                    'X-CSRFToken': csrfToken,
                },
            });
            if (response.status === 200) {
                console.log("Email sent successfully!");
                setOpen(false);
                emptyFields();
                setError(false)
                setFeedbackTitle(language.ContactPage.request.successTitle);
                setFeedbackMessage(language.ContactPage.request.successMessage);
            } else {
                console.error("Error sending email:", response.data);
                setOpen(false);
                setError(true)
                setFeedbackTitle(language.ContactPage.request.errorTitle);
                setFeedbackMessage(language.ContactPage.request.errorMessage);
            }
        } catch (error) {
            console.error("An error occurred before sending:", error);
            setOpen(false);
            setError(true)
            setFeedbackTitle(language.ContactPage.request.errorTitle);
            setFeedbackMessage(language.ContactPage.request.errorMessage);
        }
    };

    return (
        <Box display="flex" flexWrap="wrap" gap="2rem"
             maxWidth={{ xs: "90%", md: "65%", xl:"70rem" }}
             margin="auto"
             marginBottom="15rem"
             padding="1.5rem"
             borderRadius="2rem"
             alignContent="center"
             justifyContent="center"
             style={{backgroundColor:"darkgray"}}
        >
            <FormControl fullWidth required style={{marginTop:"5%", marginInline:"5%"}}>
                <InputLabel>
                    {language.ContactPage.category.label}
                </InputLabel>
                <Select
                    id="category"
                    label="Kategorie"
                    value={category}
                    fullWidth
                    variant="filled"
                    onChange={handleChange}
                >
                    <MenuItem value="search">{language.ContactPage.category.search}</MenuItem>
                    <MenuItem value="offer">{language.ContactPage.category.offer}</MenuItem>
                    <MenuItem value="other">{language.ContactPage.category.other}</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth required style={{marginTop:"1rem", marginInline:"5%"}}>
                <InputLabel>{language.ContactPage.name}</InputLabel>
                <TextField
                    id="name"
                    type="text"
                    variant="filled"
                    fullWidth
                    sx={{ input: { color: theme.palette.common.lightText } }}
                    value={nameValue}
                    onChange={handleNameChange}
                />
            </FormControl>
            <FormControl fullWidth required style={{marginTop:"1rem", marginInline:"5%"}}>
                <InputLabel>{language.ContactPage.email}</InputLabel>
                <TextField
                    id="email"
                    type="email"
                    variant="filled"
                    fullWidth
                    sx={{ input: { color: theme.palette.common.lightText } }}
                    value={emailValue}
                    onChange={handleEmailChange}
                />
            </FormControl>
            <FormControl fullWidth style={{marginTop:"1rem", marginInline:"5%"}}>
                <InputLabel sx={{marginBottom:"1rem"}}>{language.ContactPage.phone}</InputLabel>
                <TextField
                    id="phone-number"
                    type="tel"
                    variant="filled"
                    fullWidth
                    sx={{ input: { color: theme.palette.common.lightText } }}
                    value={phoneValue}
                    onChange={handlePhoneChange}
                />
            </FormControl>
            <FormControl fullWidth required style={{marginTop:"1rem", marginInline:"5%"}}>
                <InputLabel >{language.ContactPage.message}</InputLabel>
                <TextField
                    id="mail-content"
                    type="text"
                    fullWidth
                    variant="filled"
                    multiline
                    rows="5"
                    sx={{ textarea: { color: theme.palette.common.lightText } }}
                    value={messageValue}
                    onChange={handleMessageChange}
                />
            </FormControl>
            <Button style={{minWidth:"30%", backgroundColor:"green"}} onClick={handleSendEmail}>{language.ContactPage.send}</Button>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Dialog
                open={feedbackTitle!==""}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {feedbackTitle}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {feedbackMessage}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}