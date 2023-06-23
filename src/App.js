import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const App = () => {
    const [editingCorporateInfo, setEditingCorporateInfo] = useState(false);
    const [editingAllowances, setEditingAllowances] = useState(false);
    const [corporateInfo, setCorporateInfo] = useState({
        businessDescription: '',
        corporatePhilosophy: '',
        companyName: '',
        industry: '',
        mailId: '',
        phoneNumber: '',
        location: '',
        website: '',
        workingHours: '',
        establishmentDate: '',
        initialCapital: '',
        representative: '',
        branch: '',
        numberOfEmployees: '',
        salesRevenue: '',
        operationProfit: '',
        averageAgeOfEmployees: '',
        stock: '',
        linkedinLink: '',
        twitterLink: '',
        facebookLink: '',
        instagramLink: '',
        youtubeLink: '',
        foreignOwned: ''
    });
    const [allowances, setAllowances] = useState({
        salarySystem: false,
        annualHolidays: false,
        welfareBenefits: false,
        educationTraining: false,
        qualificationSupport: false,
        reducedWorkingHours: false,
        maternityLeave: false,
        housingSubsidy: false,
        familyAllowance: false,
        employeeOwnership: false,
        sideJob: false,
        mentorSystem: false,
        careerConsulting: false
    });

    const handleEditCorporateInfo = () => {
        setEditingCorporateInfo(true);
    };

    const handleEditAllowances = () => {
        setEditingAllowances(true);
    };

    const handleSaveCorporateInfo = () => {
        setEditingCorporateInfo(false);
    };

    const handleSaveAllowances = () => {
        setEditingAllowances(false);
    };

    const handleCorporateInfoChange = (field, value) => {
        setCorporateInfo((prevCorporateInfo) => ({
            ...prevCorporateInfo,
            [field]: value
        }));
    };

    const handleAllowancesChange = (field, value) => {
        setAllowances((prevAllowances) => ({
            ...prevAllowances,
            [field]: value
        }));

    };

    return (
        <>
            <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Paper sx={{ padding: '2rem', backgroundColor: 'rgb(39, 24, 126)', color: '#fff', height: '100vh' }}
                        >
                            <List>
                                <ListItem button>
                                    <ListItemText primary="DASHBOARD" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="MANAGE SUBSCRIPTION" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="YOUNG BRAIN" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="MID CAREER" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="VENDOR" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="CONSULTANT" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="REPORTS" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="SIGN OUT" />
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper sx={{ padding: '2rem', marginBottom: '2rem' }} >
                            <Typography variant="h5" gutterBottom>
                                <Paper
                                    elevation={2}
                                    style={{
                                        padding: '16px',
                                        backgroundColor: 'rgb(215, 208, 255)',
                                    }}>
                                    Corporate Information
                                    {!editingCorporateInfo && (
                                        <Button variant="outlined" startIcon={<EditIcon />} onClick={handleEditCorporateInfo}>
                                            Edit
                                        </Button>
                                    )}
                                </Paper>
                            </Typography>
                            {editingCorporateInfo ? (
                                <form>
                                    <TextField
                                        label="Business Description"
                                        fullWidth
                                        required
                                        value={corporateInfo.businessDescription}
                                        onChange={(e) => handleCorporateInfoChange('businessDescription', e.target.value)}
                                    />
                                    <TextField
                                        label="Corporate Philosophy"
                                        fullWidth
                                        required
                                        value={corporateInfo.corporatePhilosophy}
                                        onChange={(e) => handleCorporateInfoChange('corporatePhilosophy', e.target.value)}
                                    />
                                    <TextField
                                        label="Company Name"
                                        fullWidth
                                        required
                                        value={corporateInfo.companyName}
                                        onChange={(e) => handleCorporateInfoChange('companyName', e.target.value)}
                                    />
                                    <TextField
                                        label="Industry"
                                        fullWidth
                                        value={corporateInfo.industry}
                                        onChange={(e) => handleCorporateInfoChange('industry', e.target.value)}
                                    />
                                    <TextField
                                        label="Mail ID"
                                        fullWidth
                                        required
                                        value={corporateInfo.mailId}
                                        onChange={(e) => handleCorporateInfoChange('mailId', e.target.value)}
                                    />
                                    <TextField
                                        label="Phone Number"
                                        fullWidth
                                        required
                                        value={corporateInfo.phoneNumber}
                                        onChange={(e) => handleCorporateInfoChange('phoneNumber', e.target.value)}
                                    />
                                    <TextField
                                        label="Location"
                                        fullWidth
                                        required
                                        value={corporateInfo.location}
                                        onChange={(e) => handleCorporateInfoChange('location', e.target.value)}
                                    />
                                    <TextField
                                        label="Website"
                                        fullWidth
                                        value={corporateInfo.website}
                                        onChange={(e) => handleCorporateInfoChange('website', e.target.value)}
                                    />
                                    <TextField
                                        label="Working Hours"
                                        fullWidth
                                        value={corporateInfo.workingHours}
                                        onChange={(e) => handleCorporateInfoChange('workingHours', e.target.value)}
                                    />
                                    <TextField
                                        label="Establishment Date (dd-mm-yyyy)"
                                        fullWidth
                                        value={corporateInfo.establishmentDate}
                                        onChange={(e) => handleCorporateInfoChange('establishmentDate', e.target.value)}
                                    />
                                    <TextField
                                        label="Initial Capital"
                                        fullWidth
                                        value={corporateInfo.initialCapital}
                                        onChange={(e) => handleCorporateInfoChange('initialCapital', e.target.value)}
                                    />
                                    <TextField
                                        label="Representative"
                                        fullWidth
                                        value={corporateInfo.representative}
                                        onChange={(e) => handleCorporateInfoChange('representative', e.target.value)}
                                    />
                                    <TextField
                                        label="Branch"
                                        fullWidth
                                        value={corporateInfo.branch}
                                        onChange={(e) => handleCorporateInfoChange('branch', e.target.value)}
                                    />
                                    <TextField
                                        label="Number Of Employees"
                                        fullWidth
                                        value={corporateInfo.numberOfEmployees}
                                        onChange={(e) => handleCorporateInfoChange('numberOfEmployees', e.target.value)}
                                    />
                                    <TextField
                                        label="Sales Revenue"
                                        fullWidth
                                        value={corporateInfo.salesRevenue}
                                        onChange={(e) => handleCorporateInfoChange('salesRevenue', e.target.value)}
                                    />
                                    <TextField
                                        label="Operation Profit"
                                        fullWidth
                                        value={corporateInfo.operationProfit}
                                        onChange={(e) => handleCorporateInfoChange('operationProfit', e.target.value)}
                                    />
                                    <TextField
                                        label="Average Age Of Employees"
                                        fullWidth
                                        value={corporateInfo.averageAgeOfEmployees}
                                        onChange={(e) => handleCorporateInfoChange('averageAgeOfEmployees', e.target.value)}
                                    />
                                    <TextField
                                        label="Stock"
                                        fullWidth
                                        value={corporateInfo.stock}
                                        onChange={(e) => handleCorporateInfoChange('stock', e.target.value)}
                                    />
                                    <TextField
                                        label="Linkedin Link"
                                        fullWidth
                                        value={corporateInfo.linkedinLink}
                                        onChange={(e) => handleCorporateInfoChange('linkedinLink', e.target.value)}
                                    />
                                    <TextField
                                        label="Twitter Link"
                                        fullWidth
                                        value={corporateInfo.twitterLink}
                                        onChange={(e) => handleCorporateInfoChange('twitterLink', e.target.value)}
                                    />
                                    <TextField
                                        label="Facebook Link"
                                        fullWidth
                                        value={corporateInfo.facebookLink}
                                        onChange={(e) => handleCorporateInfoChange('facebookLink', e.target.value)}
                                    />
                                    <TextField
                                        label="Instagram Link"
                                        fullWidth
                                        value={corporateInfo.instagramLink}
                                        onChange={(e) => handleCorporateInfoChange('instagramLink', e.target.value)}
                                    />
                                    <TextField
                                        label="Youtube Link"
                                        fullWidth
                                        value={corporateInfo.youtubeLink}
                                        onChange={(e) => handleCorporateInfoChange('youtubeLink', e.target.value)}
                                    />
                                    <TextField
                                        label="Foreign Owned"
                                        fullWidth
                                        value={corporateInfo.foreignOwned}
                                        onChange={(e) => handleCorporateInfoChange('foreignOwned', e.target.value)}
                                    />

                                    <Button variant="contained" onClick={handleSaveCorporateInfo}>
                                        Save
                                    </Button>
                                </form>
                            ) : (
                                <div>

                                    <Typography variant="body1" gutterBottom>
                                        Business Description: {corporateInfo.businessDescription}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Corporate Philosophy: {corporateInfo.corporatePhilosophy}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Company Name: {corporateInfo.companyName}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Industry: {corporateInfo.industry}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Mail ID: {corporateInfo.mailId}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Phone Number: {corporateInfo.phoneNumber}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Location: {corporateInfo.location}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Website: {corporateInfo.website}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Working Hours: {corporateInfo.workingHours}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Establishment Date: {corporateInfo.establishmentDate}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Initial Capital: {corporateInfo.initialCapital}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Representative: {corporateInfo.representative}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Branch: {corporateInfo.branch}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Number of Employees: {corporateInfo.numberOfEmployees}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Sales Revenue: {corporateInfo.salesRevenue}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Operation Profit: {corporateInfo.operationProfit}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Average Age of Employees: {corporateInfo.averageAgeOfEmployees}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Stock: {corporateInfo.stock}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        LinkedIn Link: {corporateInfo.linkedinLink}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Twitter Link: {corporateInfo.twitterLink}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Facebook Link: {corporateInfo.facebookLink}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Instagram Link: {corporateInfo.instagramLink}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        YouTube Link: {corporateInfo.youtubeLink}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Foreign Owned: {corporateInfo.foreignOwned}
                                    </Typography>
                                </div>
                            )}
                        </Paper>

                    </Grid>
                </Grid>
                <Grid container >
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={9}>

                        <Paper sx={{ padding: '0', marginTop: '0' }}>
                            <Typography variant="h5" gutterBottom>
                                <Paper
                                    elevation={2}
                                    style={{
                                        padding: '16px',
                                        backgroundColor: 'rgb(215, 208, 255)',
                                    }}>
                                    Allowances
                                    {!editingAllowances && (
                                        <Button variant="outlined" startIcon={<EditIcon />} onClick={handleEditAllowances}>
                                            Edit
                                        </Button>
                                    )}</Paper>
                            </Typography>
                            {editingAllowances ? (
                                <form>
                                    <TextField
                                        label="Salary System Based On Meritocracy"
                                        fullWidth
                                        select
                                        SelectProps={{ native: true }}
                                        value={allowances.salarySystem}
                                        onChange={(e) => handleAllowancesChange('salarySystem', e.target.value === 'true')}
                                    >
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </TextField>
                                    <TextField
                                        label="120 Or More Annual Holidays"
                                        fullWidth
                                        select
                                        SelectProps={{ native: true }}
                                        value={allowances.annualHolidays}
                                        onChange={(e) => handleAllowancesChange('120 Or More Annual Holidays', e.target.value === 'true')}
                                    >
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </TextField>
                                    <TextField
                                        label="Generous Welfare Benifits"
                                        fullWidth
                                        select
                                        SelectProps={{ native: true }}
                                        value={allowances.welfareBenefits}
                                        onChange={(e) => handleAllowancesChange('Generous Welfare Benifits', e.target.value === 'true')}
                                    >
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </TextField>
                                    <TextField
                                        label="Enhanced Education And Training"
                                        fullWidth
                                        select
                                        SelectProps={{ native: true }}
                                        value={allowances.educationTraining}
                                        onChange={(e) => handleAllowancesChange('Enhanced Education And Training', e.target.value === 'true')}
                                    >
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </TextField>
                                    <TextField
                                        label="Salary System Based On Meritocracy"
                                        fullWidth
                                        select
                                        SelectProps={{ native: true }}
                                        value={allowances.salarySystem}
                                        onChange={(e) => handleAllowancesChange('salarySystem', e.target.value === 'true')}
                                    >
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </TextField>
                                    <TextField
                                        label="Support System For Acquriring Qualification"
                                        fullWidth
                                        select
                                        SelectProps={{ native: true }}
                                        value={allowances.qualificationSupport}
                                        onChange={(e) => handleAllowancesChange('Support System For Acquriring Qualification', e.target.value === 'true')}
                                    >
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </TextField>
                                    <Button variant="contained" onClick={handleSaveAllowances}>
                                        Save
                                    </Button>
                                </form>
                            ) : (

                                <div>
                                    <Typography variant="body1" gutterBottom>
                                        Salary System Based On Meritocracy: {allowances.salarySystem ? 'Yes' : 'No'}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        120 Or More Annual Holidays: {allowances.annualHolidays ? 'Yes' : 'No'}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Generous Welfare Benefits: {allowances.generousWelfareBenefits ? 'Yes' : 'No'}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Enhanced Education And Training: {allowances.enhancedEducationTraining ? 'Yes' : 'No'}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Support System For Acquiring Qualification: {allowances.supportSystemForQualification ? 'Yes' : 'No'}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Reduced Working Hours System: {allowances.reducedWorkingHoursSystem ? 'Yes' : 'No'}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Maternity Care Leave System: {allowances.maternityCareLeaveSystem ? 'Yes' : 'No'}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Company Housing / Rent Subsidy: {allowances.companyHousingRentSubsidy ? 'Yes' : 'No'}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Family Allowance: {allowances.familyAllowance ? 'Yes' : 'No'}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Employee Stock Ownership: {allowances.employeeStockOwnership ? 'Yes' : 'No'}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Side Job Available: {allowances.sideJobAvailable ? 'Yes' : 'No'}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Mentor System: {allowances.mentorSystem ? 'Yes' : 'No'}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Career Consulting: {allowances.careerConsulting ? 'Yes' : 'No'}
                                    </Typography>
                                </div>

                            )}
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container >
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={9}>

                        <Paper elevation={3} style={{ padding: '20px' }}>
                            <Typography variant="h6" gutterBottom>
                                <Paper
                                    elevation={2}
                                    style={{
                                        padding: '16px',
                                        backgroundColor: 'rgb(215, 208, 255)',
                                    }}>
                                    Holidays
                                </Paper></Typography>
                            <Typography variant="body1" gutterBottom>
                                Summer Holidays: {corporateInfo.summerHolidays ? 'Yes' : 'No'}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Golden Weeks: {corporateInfo.goldenWeeks ? 'Yes' : 'No'}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Other Holidays: {corporateInfo.otherHolidays ? 'Yes' : 'No'}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default App;





