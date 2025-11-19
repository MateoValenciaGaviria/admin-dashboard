'use client';

import { useCallback, useMemo, useState } from 'react';
import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from '../table';
import { User } from '../user';
import { DeleteIcon, EditIcon, EyeIcon } from '@/src/icons';
import { Status, UserProps } from '@/src/types';
import { users } from '@/src/data/users';
import { Pagination } from '../pagination';

export const DashboardPage = () => {
  type ColumnKey = 'name' | 'role' | 'status' | 'actions';

  const columns: { name: string; uid: ColumnKey }[] = [
    { name: 'NAME', uid: 'name' },
    { name: 'ROLE', uid: 'role' },
    { name: 'STATUS', uid: 'status' },
    { name: 'ACTIONS', uid: 'actions' },
  ];

  const statusColorMap: Record<Status, 'success' | 'danger' | 'warning'> = {
    active: 'success',
    paused: 'danger',
    vacation: 'warning',
  };

  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);

  const renderCell = useCallback((user: UserProps, columnKey: ColumnKey) => {
    let cellValue;
    if (columnKey !== 'actions') {
      cellValue = user[columnKey];
    }

    switch (columnKey) {
      case 'name':
        return (
          <User
            avatarProps={{ radius: 'full', src: user.avatar }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case 'role':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm capitalize'>{cellValue}</p>
            <p className='text-bold text-sm capitalize text-default-400'>
              {user.team}
            </p>
          </div>
        );
      case 'status':
        return (
          <Chip
            className='capitalize'
            color={statusColorMap[user.status]}
            size='sm'
            variant='flat'
          >
            {cellValue}
          </Chip>
        );
      case 'actions':
        return (
          <div className='relative flex items-center gap-2'>
            <Tooltip content='Details'>
              <span className='text-lg text-default-400 cursor-pointer active:opacity-50'>
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content='Edit user'>
              <span className='text-lg text-default-400 cursor-pointer active:opacity-50'>
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color='danger' content='Delete user'>
              <span className='text-lg text-danger cursor-pointer active:opacity-50'>
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table
      isCompact
      aria-label='Example table with custom cells'
      bottomContent={
        <div className='flex w-full justify-center'>
          <Pagination
            isCompact
            showControls
            showShadow
            color='default'
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align='start'>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={items}>
        {(item: UserProps) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey as ColumnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
