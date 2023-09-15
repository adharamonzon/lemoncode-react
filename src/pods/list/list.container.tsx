import React from 'react';
import { MemberEntity } from './list.vm';
import { List } from './list.component';
import { getMemberList } from './api/list.api';
import { mapMemberListToMv } from './list.mappers';
import { TextInputComponent } from '../../common';
import { useDebounce } from 'use-debounce';
import { OrganizationContext } from '../../core/providers/organization/organization.provider';

export const ListContainer : React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const {organizationName, setOrganizationName } = React.useContext(OrganizationContext)
  const [debouncedFilter] = useDebounce(organizationName, 500);
  
  React.useEffect(() => {
    console.log(organizationName)
      getMemberList(organizationName)
      .then((results) => mapMemberListToMv(results))
      .then((results) => setMembers(results));
  }, [debouncedFilter]);

  return (
    <>
    <div className='input'>
      <TextInputComponent
              value={organizationName}
              onChange={(e) => {
                setOrganizationName(e)
              }}
              placeholder="Buscar organización..." 
              label='Search organization:'
      />
    </div>
      <List members={members} />
    </>
  );
}