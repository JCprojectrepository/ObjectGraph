import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function BootcampStatusBadge(status: any) {
    const colors = () => {
        switch (Number(status)) {
            case 0:
                return <Stack direction="row" spacing={1}>
                <Chip label="Small" size="small" />
              </Stack>
            case 1:
                return <Stack direction="row" spacing={1}>
                <Chip label="Small" size="small" />
              </Stack>
            case 2:
                return <Stack direction="row" spacing={1}>
                <Chip label="Small" size="small" />
              </Stack>
            default:
                return <Stack direction="row" spacing={1}>
                <Chip label="Small" size="small" color="primary" />
              </Stack>
        }
    }
    const badge = colors()
    return badge
    
}