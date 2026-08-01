import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function CustomNotification({title}) {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
     {title}
    </Alert>
  );
}
