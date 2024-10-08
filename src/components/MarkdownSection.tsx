import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

const MarkdownSection: React.FC<IMarkdownSection> = ({
  section,
  onSelectElement,
}) => {
  if (!section) {
    return (
      <Box sx={{ padding: '1rem' }}>
        <Typography variant="h6">Please select a section</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h6" sx={{ paddingLeft: '1rem', paddingTop: '1rem' }}>
        {section.title}
      </Typography>
      <List>
        {section.element.map((el) => (
          <ListItem key={el.id} onClick={() => onSelectElement([el.syntax])}>
            <ListItemText primary={el.element} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MarkdownSection;
