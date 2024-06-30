import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function TaskStatusBadge(status: any) {
    const colors = () => {
        switch (Number(status)) {
            case 1:
                return <Stack direction="row" spacing={1}>
                <Chip label="未提出" size="small" color="secondary"/>
              </Stack>
            case 2:
                return <Stack direction="row" spacing={1}>
                <Chip label="レビュー待ち" size="small" color="warning"/>
              </Stack>
            case 3:
                return <Stack direction="row" spacing={1}>
                        <Chip label="レビュー中" size="small" color="primary"/>
                      </Stack>
            case 4:
                return <Stack direction="row" spacing={1}>
                      <Chip label="合格" size="small"color="success" />
                    </Stack>
            case 5:
              return <Stack direction="row" spacing={1}>
              <Chip label="再提出" size="small" color="warning" />
            </Stack>
            default:
                return <Stack direction="row" spacing={1}>
                <Chip label="合格l" size="small" color="primary" />
              </Stack>
        }
    }
    const badge = colors()
    return badge
    
}