import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
function BlogTag({color:{text , bg},tagText} ) {
  return (
    <Link
          style={{
            textDecoration: "none",
          }}
          to={"/sdafsdf"}
        >
          <Button
            sx={{
              backgroundColor: bg,
              color: text,
              padding:"4px"
            }}
          >
            {tagText}
          </Button>
        </Link>
  )
}

BlogTag.propTypes = {
  color:PropTypes.shape({
    text:PropTypes.string,
    bg:PropTypes.string
  })
  ,tagText:PropTypes.string
};

export default BlogTag