import styled from "styled-components";

const Paragraph = () => {
  return (
    <StyledWrapper className="content">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
        corporis in earum eos, necessitatibus doloremque eius vel ex
        reprehenderit tempora.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        obcaecati reprehenderit quasi eaque hic ducimus itaque, cum consequatur
        temporibus quae ipsam incidunt tempore soluta distinctio corporis error
        expedita possimus architecto dolorum. Consequatur delectus esse nulla,
        at, facere, alias excepturi unde maiores quaerat eos ducimus
        perspiciatis ipsa voluptates necessitatibus odio voluptas voluptatum
        minima nemo et libero iusto. Adipisci, quod commodi. Corporis nostrum
        aliquid accusamus tempora ea veniam tenetur laborum fuga dolor eaque.
        Numquam nemo natus culpa quo, voluptas quasi? Laudantium, maiores
        aspernatur? Nihil dolor dolorum eius vel. Tenetur, iusto laudantium
        laboriosam aspernatur obcaecati tempore, voluptatum assumenda corrupti
        commodi ipsam repellendus ex.
      </p>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  &.content {
    max-width: 768px;
    margin: 0 auto;
    text-align: justify;

    p {
      font-size: 22px;
    }
  }
`;

export default Paragraph;
